import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import {authorsFormattedForDropdown} from '../../selectors/selectors';
import toastr from 'toastr';
import PropTypes from 'prop-types';

export class ManageCoursePage extends React.Component {
  state = {
    course: Object.assign({}, this.props.course),
    errors: {},
    saving: false
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.course.id != nextProps.course.id) {
      // Necessary to populate form when existing course is loaded directly.
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }

  updateCourseState = (event) => {
    const field = event.target.name;
    let course = Object.assign({}, this.state.course);
    course[field] = event.target.value;
    return this.setState({course: course});
  };

  courseFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.course.title.length < 5) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  saveCourse = (event) => {
    event.preventDefault();

    if (!this.courseFormIsValid()) {
      return;
    }

    this.setState({saving: true});
    this.props.actions.saveCourse(this.state.course)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  };

  redirect() {
    this.setState({saving: false});
    toastr.success('Course saved.');
    this.context.router.history.push('/courses');
  }

  render() {
    return (
      <CourseForm
        course={this.state.course}
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
        errors={this.state.errors}
        allAuthors={this.props.authors}
        saving={this.state.saving}
      />
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

function getCourseById(courses, id) {
  const course = courses.filter(c => c.id === id);
  if (course) return course[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {

  const courseId = ownProps.match.params.id; // from the path `/course/:id`

  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }

  return {
    course: course,
    authors: authorsFormattedForDropdown(state.authors)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);

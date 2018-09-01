import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import {PropTypes} from 'prop-types';

class CoursesPage extends Component {
  static initialState = () => ({
    course: {
      title: ''
    }
  });
  state = CoursesPage.initialState();

  onTitleChange = (event) => {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  };

  onClickSave = () => {
    this.props.actions.createCourse(this.state.course);
    this.setState(CoursesPage.initialState());
  };

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add course</h2>
        <input type="text" onChange={this.onTitleChange} value={this.state.course.title}/>
        <input type="submit" value="Save" onClick={this.onClickSave}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses // state.courser ref index reducers
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

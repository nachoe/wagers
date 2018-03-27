import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class NewComp extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label htmlFor="">{field.label}</label>
                <input
                    className="form-control"
                    {...field.input}
                />
            </div>
        );
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <form action="/">
                        <h3>New Bet</h3>
                        <Field
                            name="title"
                            label="Title"
                            component={this.renderField}
                        />
                        <Field
                            name="description"
                            label="Description"
                            component={this.renderField}
                        />
                        <Field
                            name="Notes"
                            label="Notes"
                            component={this.renderField}
                        />
                    </form>
                </div>
            </div>

        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = "Enter a title"
    }
    //if errors is empty the form is valid
    return errors;
}

export default reduxForm({
    form: 'RecipeNewForm',
    validate,
})(NewComp);
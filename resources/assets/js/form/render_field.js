import React, { Component } from 'react';

export function renderField(field) {
    const {meta: {touched, error}} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
        <div className={className}>
            <label htmlFor="">{field.label}</label>
            <input
                className="form-control"
                {...field.input}
            />
            <span className="text-danger">{touched ? error : ''}</span>
        </div>
    );
}
import React from "react";
import './CompanyDifferences.scss';

function CompanyDifferences() {
  return (
    <section className="landing-page__diff">
      <div className="landing-page__diff-header">
        <h1>LLP vs. PRIVATE LIMITED COMPANY vs. PARTNERSHIP</h1>
      </div>
      <div className="landing-page__diff-content">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Private Limited Company</th>
              <th scope="col">One Person Company</th>
              <th scope="col">Limited Liability Partnership</th>
              <th scope="col">Partnership Firm</th>
              <th scope="col">Proprietorship Firm</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Act</th>
              <td>Companies Act, 2013</td>
              <td>Companies Act, 2013</td>
              <td>Limited Liability Partnership Act, 2008</td>
              <td>Indian Partnership Act, 1932</td>
              <td>No specified Act</td>
            </tr> 
            <tr>
              <th scope="row">Registration Requirement</th>
              <td>Mandatory</td>
              <td>Mandatory</td>
              <td>Mandatory</td>
              <td>Optional</td>
              <td>No</td>
            </tr> 
            <tr>
              <th scope="row">Number of members</th>
              <td>2 - 200</td>
              <td>Only 1</td>
              <td>2 - Unlimited</td>
              <td>2 - 50</td>
              <td>Only 1</td>
            </tr>    
            <tr>
              <th scope="row">Separate Legal Entity</th>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>No</td>
              <td>No</td>
            </tr>
            <tr>
              <th scope="row">Liability Protection</th>
              <td>Limited</td>
              <td>Limited</td>
              <td>Limited</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
            </tr>
            <tr>
              <th scope="row">Statutory Audit</th>
              <td>Mandatory</td>
              <td>Mandatory</td>
              <td>Dependent</td>
              <td>Not mandatory</td>
              <td>Not mandatory</td>
            </tr>
            <tr>
              <th scope="row">Ownership Transferability</th>
              <td>Restricted</td>
              <td>No</td>
              <td>Yes</td>
              <td>No</td>
              <td>No</td>
            </tr>
            <tr>
              <th scope="row">Uninterrupted Existence</th>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>No</td>
              <td>No</td>
            </tr>
            <tr>
              <th scope="row">Foreign Participation</th>
              <td>Allowed</td>
              <td>Not Allowed</td>
              <td>Allowed</td>
              <td>Not Allowed</td>
              <td>Not Allowed</td>
            </tr>
            <tr>
              <th scope="row">Tax Rates</th>
              <td>Moderate</td>
              <td>Moderate</td>
              <td>High</td>
              <td>High</td>
              <td>Low</td>
            </tr>
            <tr>
              <th scope="row">Statutiry Compliances</th>
              <td>High</td>
              <td>Moderate</td>
              <td>Moderate</td>
              <td>Less</td>
              <td>Less</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default CompanyDifferences;

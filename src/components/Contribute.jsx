import React from "react";
import { FEEDBACK_EMAIL, DONATION_LINK } from "../constants";

const Contribute = () => {
  console.log(FEEDBACK_EMAIL, DONATION_LINK);
  return (
    <>
      <h3>Contribute</h3>
      <hr />
      <h4>Send Feedback</h4>
      <hr />
      <p>
        The easiest way to contribute is to send us your feedback by email (
        <a href={`mailto:${FEEDBACK_EMAIL}`}>{FEEDBACK_EMAIL}</a>) or twitter (
        <a href="https://twitter.com/ejuicr" target="_blank">
          @ejuicr
        </a>
        ).
      </p>
      <p>We appreciate any feedback you’d like to share.</p>
      <p>
        If you don’t really have anything to say about ejuicr right now maybe
        you could answer one or more of the questions below for us:
      </p>
      <ul>
        <li>How did you find ejuicr?</li>
        <li>How long have you been using ejuicr?</li>
        <li>When and how do you typically use ejuicr?</li>
        <li>
          Do you find ejuicr easy to use or did you have trouble at first?
        </li>
        <li>
          Do you find ejuicr easy to use or did you have trouble at first?
        </li>
        <li> What’s your favorite or least favorite thing about ejuicr?</li>
        <li> What’s your favorite or least favorite thing about ejuicr?</li>
        <li> Is there a feature you wish that ejuicr had?</li>
        <li> Ever had a problem with ejuicr? If so, what was it?</li>
        <li> Does ejuicr fail on any devices you’ve tried?</li>
        <li> How likely are you to recommend ejuicr to a friend?</li>
      </ul>
      <h4>Github</h4>
      <hr />
      <p>
        The source code for ejuicr is available on{" "}
        <a href="https://github.com/jimfarrugia/ejuicr" target="_blank">
          Github
        </a>
        .
      </p>
      <p>
        If you’d like to report a bug or formally suggest a new feature, please
        create a new issue on the{" "}
        <a href="https://github.com/Jimfarrugia/ejuicr/issues" target="_blank">
          issues page
        </a>
        .
      </p>
      <p>
        Feel free to submit pull request if you’d like to contribute to the
        codebase. We kindly ask that you clearly document the changes you have
        made.
      </p>
      <h4>Donate</h4>
      <hr />
      <p>
        If you’d like to throw a couple bucks our way to help with server costs
        you can send your donation <a href={`${DONATION_LINK}`}>here</a>.
      </p>
    </>
  );
};

export default Contribute;

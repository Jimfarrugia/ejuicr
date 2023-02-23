import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h3>About ejuicr</h3>
      <hr />
      <p className="subtitle">
        The goal of ejuicr is to a vaper's fist choice for a convenient and
        easy-to-use ejuice calculator.
      </p>
      <h4>Use it Anywhere</h4>
      <hr />
      <p>If it can load a web page, it can run ejuicr.</p>
      <p>
        We try to keep the UI simple and unobtrusive so that you can use eJuicr
        easily whether you're reaching past a bunch of bottles for your keyboard
        or pecking at your phone with one hand and mixing juice with the other.
      </p>
      <p>
        Install the web app to your desktop or home screen so you can even use
        ejuicr offline! <strong>(coming soon...)</strong>
      </p>
      <h4>Little to No Setup Time</h4>
      <hr />
      <p>
        The faster you can start mixing, the better. So we try to remove as many
        speed bumps as possible.
      </p>
      <p>
        Sign in and save your defaults (nicotine base strength, PG/VG ratio,
        etc) to make mixing even faster.
      </p>
      <h4>No Ads or Trackers - Ever</h4>
      <hr />
      <p>
        ejuicr is a labour of love. We don't want your money or your data. If
        there's anything we want, it's your{" "}
        <Link to="/contribute">feedback</Link>.
      </p>
      <h4>No Unnecessary Emails - Ever.</h4>
      <hr />
      <p>We hate spam.</p>
      <p>
        Unless you email support or you need to reset your password or something
        like that, you will never recieve emails from us.
      </p>
    </>
  );
};

export default About;

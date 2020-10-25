import React from "react";
import PrivateLimitedCard from "./PrivateLimitedCard";
import './PrivateLimitedPackages.scss';

function PrivateLimitedPackages() {
  return (
    <section class="private-limited__packages">
      <div class="private-limited__packages-content">
        <div class="container">
          <div class="private-limited__packages-content-header row">
            <div class="col-md-12 col-sm-12">
              <h1>SERVICES YOU GET</h1>
            </div>
          </div>
          <div class="private-limited__packages-content-main row">
              <PrivateLimitedCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivateLimitedPackages;

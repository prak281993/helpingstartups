import React from "react";
import SectionEightCard from "./SectionEightCard";
import './SectionEightPackages.scss';

function SectionEightPackages() {
  return (
    <section class="section-eight__packages">
      <div class="section-eight__packages-content">
        <div class="container">
          <div class="section-eight__packages-content-header row">
            <div class="col-md-12 col-sm-12">
              <h1>SERVICES YOU GET</h1>
            </div>
          </div>
          <div class="section-eight__packages-content-main row">
            <SectionEightCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionEightPackages;

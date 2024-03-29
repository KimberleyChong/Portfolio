import { Component, OnInit } from '@angular/core';

export interface experienceData {
  logo: String;
  title: String;
  company: String;
  location: String;
  date: String;
  bulletPoints: String[];
  toolTip: String;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})

export class ExperienceComponent implements OnInit {


  public Experience: experienceData[] = [
    {
      logo: "dockstore",
      title: "Front-End Software Developer",
      company: "Ontario Institute for Cancer Research",
      location: "Toronto, ON",
      date: "Jan. 2023 - Apr. 2023",
      bulletPoints: [
        "Designed & implemented widgets for redesigned Dashboard landing while prioritizing page responsiveness",
        "Implemented UI improvements including component refactoring, search result drop-downs, persistent collapsible panel states",
        "Updated unit and E2E tests for stable integration",
      ],
      toolTip: "Ontario Institute for Cancer Research - Dockstore",
    },
    {
      logo: "dockstore",
      title: "Front-End Software Developer",
      company: "Ontario Institute for Cancer Research",
      location: "Toronto, ON",
      date: "Jan. 2022 - Apr. 2022",
      bulletPoints: [
        "Implemented site-wide changes to advance complete UI redesign of platform",
        "Implemented UI components such as user information pages, personal account sidebars, and navigation sidebars",
        "Maintained unit tests for updated code",
      ],
      toolTip: "Ontario Institute for Cancer Research - Dockstore",
    },
    {
      logo: "carta",
      title: "QA Analyst",
      company: "Carta",
      location: "Kitchener/Waterloo, ON",
      date: "May 2021 - Aug. 2021",
      bulletPoints: [
        "Composed test suites & performed end-to-end testing for 4 major feature releases - iOS, Android & web",
        "Weekly bug report triaging, assisted with troubleshooting & root causes",
        "Data analysis for audit work reviewing user NPS scores & support tickets",
      ],
      toolTip: "Carta",
    },
    {
      logo: "hellohire",
      title: "QA Analyst & Customer Success Specialist",
      company: "Hellohire (Formerly Showfloor)",
      location: "Toronto, ON",
      date: "Sept. 2020 - Dec. 2020",
      bulletPoints: [
        "End-to-end & API testing to ensure stability before deploys",
        "Detailed bug reports, worked with dev team to troubleshoot & resolve",
        "Performed administrative duties including creating 100+ users, 30 virtual event spaces",
      ],
      toolTip: "Hellohire (Formerly Showfloor)",
    },
    {
      logo: "metrolinx",
      title: "Rail Fleet Maintenance Assistant",
      company: "Metrolinx",
      location: "Toronto, ON",
      date: "Jan. 2020 - Apr. 2020",
      bulletPoints: [
        "Fuel efficiency calculations, data graphing for fleet resource consumption & project expense reports",
        "Continuously update database with daily equipment failures, repairs & replacements",
      ],
      toolTip: "Metrolinx",
    }
  ]

  constructor() { }

  ngOnInit(): void {}

  public experienceLink() {
    window.location.href = "#experience";
  }

}

document.addEventListener("DOMContentLoaded", function () {

  const projects = window.projects;

  if (!projects) {
    console.error("projects.js was not loaded.");
    return;
  }

  const currentProject = document.body.dataset.project;

  const currentIndex = projects.findIndex(
    project => project.slug === currentProject
  );

  if (currentIndex === -1) {
    console.error(
      "Project not found:",
      currentProject
    );
    return;
  }

  const previousIndex =
    (currentIndex - 1 + projects.length) % projects.length;

  const nextIndex =
    (currentIndex + 1) % projects.length;

  const previousProject =
    projects[previousIndex];

  const nextProject =
    projects[nextIndex];


  /*
   * All child projects are siblings.
   *
   * From:
   * /mynabes/index.html
   *
   * this creates:
   * ../linqio/index.html
   * ../double-zero/index.html
   */

  const previousURL =
    "../" + previousProject.slug + "/index.html";

  const nextURL =
    "../" + nextProject.slug + "/index.html";


  const previousLink =
    document.querySelector("[data-project-prev]");

  const previousTitle =
    document.querySelector("[data-project-prev-title]");

  const nextLink =
    document.querySelector("[data-project-next]");

  const nextTitle =
    document.querySelector("[data-project-next-title]");


  if (previousLink) {
    previousLink.href = previousURL;
  }

  if (previousTitle) {
    previousTitle.textContent =
      previousProject.title;
  }

  if (nextLink) {
    nextLink.href = nextURL;
  }

  if (nextTitle) {
    nextTitle.textContent =
      nextProject.title;
  }

});
import data from "./data.json" assert { type: 'json' };

const jobListWrapperWrapper = document.querySelector('.joblist-wrapper-wrapper');

for(let i=0; i < data.length; i++){
    const jobListWrapper = document.createElement('div');
    jobListWrapper.classList.add('joblist-wrapper');
    jobListWrapper.id = i+1;
    jobListWrapperWrapper.appendChild(jobListWrapper);

    const jobBox = document.createElement('div');
    jobBox.classList.add('job-box');
    jobListWrapper.appendChild(jobBox);

    const jobBoxImageHeader = document.createElement('div');
    jobBoxImageHeader.classList.add('job-box-image-header');
    jobBox.appendChild(jobBoxImageHeader);

    const logo = document.createElement('img');
    logo.src = data[i].logo;
    logo.alt = `${data[i].company} logo`;
    logo.id = 'logo';
    jobBoxImageHeader.appendChild(logo);

    const jobBoxHeader = document.createElement('div');
    jobBoxHeader.classList.add('job-boxheader');
    jobBoxImageHeader.appendChild(jobBoxHeader);

    const boxHeaderWrap = document.createElement('div');
    boxHeaderWrap.classList.add('boxheaderwrap');
    jobBoxHeader.appendChild(boxHeaderWrap);

    const position = document.createElement('h2');
    position.id = 'position';
    position.textContent = data[i].position;
    jobBoxHeader.appendChild(position);

    const info = document.createElement('ul');
    info.classList.add('info');
    jobBoxHeader.appendChild(info);

    const postedAt = document.createElement('li');
    postedAt.id = 'postedAt';
    postedAt.textContent = data[i].postedAt;
    info.appendChild(postedAt);

    const contract = document.createElement('li');
    contract.id = 'contract';
    contract.textContent = data[i].contract;
    info.appendChild(contract);

    const location = document.createElement('li');
    location.id = 'location';
    location.textContent = data[i].location;
    info.appendChild(location);

    const company = document.createElement('h3');
    company.id = 'company';
    company.textContent = data[i].company;
    boxHeaderWrap.appendChild(company);

    const headertags = document.createElement('div');
    boxHeaderWrap.appendChild(headertags);

    const newspan = document.createElement('span');
    newspan.id = 'new';

    const featured = document.createElement('span');
    featured.id = 'featured';

    newspan.textContent = "NEW";
    featured.textContent = "FEATURED";
    
    if(data[i].new){
        headertags.appendChild(newspan);
    }

    if(data[i].featured){
        headertags.appendChild(featured);
    }


    const jobBoxFooter = document.createElement('div');
    jobBoxFooter.classList.add('job-boxfooter');
    jobBox.appendChild(jobBoxFooter);

    const rolewrap = document.createElement('div');
    rolewrap.classList.add('role-wrap');
    jobBoxFooter.appendChild(rolewrap);


    // ROLE
    const rolediv = document.createElement('div');
    rolediv.classList.add('role-div', 'wrapstyle');
    rolediv.id = data[i].role;
    rolewrap.appendChild(rolediv);

    const role = document.createElement('p');
    role.classList.add('pstyle');
    role.id = 'role';
    rolediv.appendChild(role);
    role.textContent = data[i].role;

    // LANGUAGES
    const languagesArray = data[i].languages;
    
      for (let j = 0; j < languagesArray.length; j++) {
        const languagesdiv = document.createElement('div');
        languagesdiv.classList.add('languages-div', 'wrapstyle');
        languagesdiv.id = data[i].languages[j];
        rolewrap.appendChild(languagesdiv);
        const languages = document.createElement('p');
        languages.classList.add('pstyle');
        languagesdiv.appendChild(languages);
        languages.textContent = data[i].languages[j];
      }

   //Tools
   const toolsArray = data[i].tools;
   for (let j = 0; j < toolsArray.length; j++){
    const toolsdiv = document.createElement('div');
    toolsdiv.classList.add('tools-div', 'wrapstyle');
    toolsdiv.id = data[i].tools[j];
    rolewrap.appendChild(toolsdiv);
    const tools = document.createElement('p');
    tools.classList.add('pstyle');
    tools.id = 'tools'+j;
    toolsdiv.appendChild(tools);
    tools.textContent = data[i].tools[j];
   }
    
   // Level
   const leveldiv = document.createElement('div');
    leveldiv.classList.add('level-div', 'wrapstyle');
    rolewrap.appendChild(leveldiv);
    leveldiv.id = data[i].level;
    const level = document.createElement('p');
    level.classList.add('pstyle');
    level.id = 'level'+i;
    leveldiv.appendChild(level);
    level.textContent = data[i].level;

    

}
const exit = document.querySelectorAll(".sectionexit");
const clear = document.querySelector(".clear");
const filterWrapper = document.querySelector(".filter-section-wrapper");
const clickList = document.querySelectorAll(".wrapstyle");
const sectionfilterwrapper = document.querySelector(".sectionfilter-wrapper");

let filteredData = data;
let filterApplied = [];
let x = data;


clickList.forEach(click => {
  click.addEventListener("click", () => {
    const text = click.querySelector(".pstyle").textContent;

    let textFound = false; // flag variable

    for (let i = 0; i < sectionfilterwrapper.children.length; i++) {
      if (sectionfilterwrapper.children[i].textContent == text) {
        textFound = true;
        break;
      }
    }

    if (!textFound) {
      filterWrapper.classList.remove("hide");

    

      const sectionfilter = document.createElement('div');
      sectionfilter.classList.add('sectionfilter');
      sectionfilterwrapper.appendChild(sectionfilter);
  
      const filternamewrapper = document.createElement('div');
      filternamewrapper.classList.add('filtername-wrapper');
      sectionfilter.appendChild(filternamewrapper);
  
      const sectionfiltername = document.createElement('p');
      sectionfiltername.id = "sectionfiltername";
      filternamewrapper.appendChild(sectionfiltername);
      sectionfiltername.textContent = text;
  
      const sectionexit = document.createElement('div');
      sectionexit.classList.add("sectionexit");
      sectionfilter.appendChild(sectionexit);
  
      const exitimg = document.createElement('img');
      exitimg.src = './images/icon-remove.svg';
      sectionexit.appendChild(exitimg);
  
      
  
      // console.log(text);

      filterApplied.push(text);
      console.log(filterApplied);
  
      filteredData = filteredData.filter(element => {
          return (
            element.tools.includes(text) ||
            element.languages.includes(text) ||
            element.role.includes(text) ||
            element.level.includes(text)
          );
        });

    
      sectionexit.addEventListener("click", () => {
        sectionfilter.remove();
        for (let i = 0; i < filterApplied.length; i++) {
          if (filterApplied[i] === text) {
            filterApplied.splice(i, 1);
          }
        }
        for(let i=0; i<filterApplied.length; i++){
          filteredData.filter(element =>{
            return (
              element.tools.includes(filterApplied[i]) ||
              element.languages.includes(filterApplied[i]) ||
              element.role.includes(filterApplied[i]) ||
              element.level.includes(filterApplied[i])
            )
          })
        }

        console.log(filteredData);

        console.log(filterApplied);
        if(sectionfilterwrapper.children.length == 0 ){
          sectionfilter.remove();
          filterWrapper.classList.add("hide");
          for (let i = 0; i < jobListWrapperWrapper.children.length; i++){
            jobListWrapperWrapper.children[i].style.display = "block"
          }
          filteredData = data;
        }
      });
      
    
  
      for (let i = 0; i < jobListWrapperWrapper.children.length; i++) {
        let hasMatchingId = false;
        for (let element of filteredData) {
          if (element.id == jobListWrapperWrapper.children[i].id) {
            hasMatchingId = true;
            break;
          }
        }
        if (!hasMatchingId) {
          jobListWrapperWrapper.children[i].style.display = "none";
        } else {
          jobListWrapperWrapper.children[i].style.display = "block";
        }
      }
    }
  });
});




clear.addEventListener("click", () => {
    filterWrapper.classList.add("hide");
    sectionfilterwrapper.innerHTML = "";
    for (let i = 0; i < jobListWrapperWrapper.children.length; i++){
      jobListWrapperWrapper.children[i].style.display = "block"
    }
    filteredData = data;
})
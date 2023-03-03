import data from "./data.json" assert { type: 'json' };

const jobListWrapperWrapper = document.querySelector('.joblist-wrapper-wrapper');

for(let i=0; i < data.length; i++){
    const jobListWrapper = document.createElement('div');
    jobListWrapper.classList.add('joblist-wrapper');
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
        rolewrap.appendChild(languagesdiv);
        const languages = document.createElement('p');
        languages.classList.add('pstyle');
        languages.id = 'languages'+j;
        languagesdiv.appendChild(languages);
        languages.textContent = data[i].languages[j];
      }

   //Tools
   const toolsArray = data[i].tools;
   for (let j = 0; j < toolsArray.length; j++){
    const toolsdiv = document.createElement('div');
    toolsdiv.classList.add('tools-div', 'wrapstyle');
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
    const level = document.createElement('p');
    level.classList.add('pstyle');
    level.id = 'level'+i;
    leveldiv.appendChild(level);
    level.textContent = data[i].level;

}

const clear = document.querySelector(".clear");
const filterWrapper = document.querySelector(".filter-section-wrapper");
const clickList = document.querySelectorAll(".wrapstyle");
const sectionfilterwrapper = document.querySelector(".sectionfilter-wrapper");



clickList.forEach(click => {
  click.addEventListener("click", () => {
    filterWrapper.classList.remove("hide");

    const text = click.querySelector(".pstyle").textContent;

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

    console.log(text);

    let filteredData = [];
    
    const filterToolsData = data.filter(element => {
        if (element.tools.includes(text)) {
            filteredData.push(element);
            return true;
        }
        return false;
    });
    
    console.log(filteredData);

    const filterLangaugesData = data.filter(element => {
        return element.languages.includes(text);
    });

    const filterRolesData = data.filter(element => {
        return element.role.includes(text);
    });

    const filterlevelData = data.filter(element => {
        return element.level.includes(text);
    });



    console.log(filterlevelData);
    console.log(filterRolesData);
    console.log(filterLangaugesData);
    console.log(filterToolsData);
      
  });


});

clear.addEventListener("click", () => {
    filterWrapper.classList.add("hide");
    sectionfilterwrapper.innerHTML = "";
})


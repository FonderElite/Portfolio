"use strict";
document.addEventListener('DOMContentLoaded', function (event) {
    // array with texts to type in typewriter
    let dataText = ["Hello there! iam FonderElite.", "A web developer.", "A programmer.", "A CTF player and a pentester."];
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    const typeWriter = (text, i, fnCallback) => {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
            // add next character to h1
            document.getElementById("write").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true">|</span>';
            // wait for a while and call this function again for next character
            setTimeout(() => {
                typeWriter(text, i + 1, fnCallback);
            }, 100);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 700);
        }
    };
    // start a typewriter animation for a text in the dataText array
    const StartTextAnimation = (i) => {
        if (typeof dataText[i] == 'undefined') {
            setTimeout(() => {
                StartTextAnimation(0);
            }, 60000);
        }
        // check if dataText[i] exists
        if (i < dataText[i].length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, () => {
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
    };
    // start the text animation
    StartTextAnimation(0);
});
/*Github Rest API*/
async function fetchGithub(url) {
    let response = await fetch(url);
    if (response.status == 200 || response.status != 400) {
        const json = await response.json();
        console.log(json);
        const data1 = ['login', 'id', 'avatar_url', 'html_url', 'followers_url', 'following_url', 'gists_url', 'bio', 'company', 'blog', 'location'];
        const data2 = ['public_repos', 'public_gists', 'followers', 'following'];
        let pfname = document.getElementById('loginh2');
        let id = document.getElementById('idh2');
        let email = document.getElementById('emailh2');
        let hire = document.getElementById('hireh2');
        let twitter = document.getElementById('twitterh2');
        pfname.innerHTML = `Username: ${json.login}`;
        id.innerHTML = `Id: ${json.id}`;
        email.innerHTML = `Email: ${json.email}`;
        hire.innerHTML = `Hireable: ${json.hireable}`;
        twitter.innerHTML = `Twitter Username: ${json.twitter_username}`;
        /*Data Stats 2*/
        let company = document.getElementById('companyh2');
        let blog = document.getElementById('blogh2');
        let location = document.getElementById('locationh2');
        let publicrepo = document.getElementById('publicrepoh2');
        let publicgist = document.getElementById('publicgistsh2');
        let followers = document.getElementById('followersh2');
        let following = document.getElementById('followingh2');
        company.innerHTML = `Company: ${json.company}`;
        blog.innerHTML = `Portfolio Website: ${json.blog}`;
        location.innerHTML = `Location: ${json.location}`;
        publicrepo.innerHTML = `Public Repos: ${json.public_repos}`;
        publicgist.innerHTML = `Public Gists: ${json.public_gists}`;
        followers.innerHTML = `Followers: ${json.followers}`;
        following.innerHTML = `Following: ${json.following}`;
    }
    else {
        throw new Error;
        console.log(Error);
    }
}
fetchGithub('https://api.github.com/users/fonderelite');
const status = (el) => {
    const hours = new Date().getHours();
    const isDayTime = hours > 6 && hours < 20;
    let circle = document.getElementById(el);
    if (hours > 6 && hours < 20) {
        circle.style.background = 'rgb(102, 224, 30)';
    }
    else {
        circle.style.background = 'rgb(145, 15, 15)';
    }
};
status('circle');
async function repoApi(url) {
    try {
        let response_repo = await fetch(url);
        if (response_repo.status == 200 || response_repo.status != 400) {
            const jsonData = await response_repo.json();
            console.log(jsonData[0]);
            
        }
        else {
            console.log('Something went wrong.');
        }
    }
    catch (Err) {
        console.log(Err);
    }
}
repoApi('https://api.github.com/users/fonderelite/repos');

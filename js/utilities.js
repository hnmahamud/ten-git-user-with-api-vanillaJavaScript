const displayData = async (data) => {
    const cardContainer = document.getElementById('card-container');
    data.forEach(element => {
        // Fetch all user github link
        fetch(element.repos_url)
            .then(res => res.json())
            .then(gitInfo => {
                // Fetch all user followers pic
                fetch(element.followers_url)
                    .then(res => res.json())
                    .then(followersInfo => {
                        const [firstFollower, secondFollower] = followersInfo;
                        // Append card
                        const newDiv = document.createElement('div');
                        newDiv.innerHTML = `
                        <div class="w-full text-white bg-gray-500 border rounded-lg shadow">
                            <div class="flex flex-col items-center mt-4">
                                <img class="w-24 h-24 mb-3 rounded-full shadow-lg"
                                    src="${element.avatar_url ? element.avatar_url : ''}" alt="" />
                                <h5 class="mb-1 text-xl font-medium">${element.login ? element.login : ''}</h5>
                                <span class="text-sm">Git Link: ${gitInfo[0].owner.html_url}</span>
                                <div class="flex items-center mt-4 mb-4 gap-2">
                                    <span class="text-sm">Followers</span>
                                    <img class="w-12 h-12" src="${firstFollower.avatar_url ? firstFollower.avatar_url : ''}"
                                        alt="" />
                                    <img class="w-12 h-12" src="${secondFollower.avatar_url ? secondFollower.avatar_url : ''}"
                                        alt="" />
                                </div>
                            </div>
                        </div>
                        `
                        cardContainer.append(newDiv);
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
    });
}
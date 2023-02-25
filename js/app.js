const loadData = async () => {
    // Fetch 10 user data
    try {
        const res = await fetch('https://api.github.com/users?per_page=10');
        const data = await res.json();
        displayData(data);
    }
    catch (error) {
        console.log(error);
    }
}
loadData();
// Fetch users and summarize their info
function fetchUsersAndSummarize() {
  const url = "https://jsonplaceholder.typicode.com/users";

  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(`Request failed with ${res.status}`);
      return res.json();
    })
    .then(users => {
      const result = users
        .filter(user => user.address.city[0] === "C")
        .map(user => ({
          id: user.id,
          name: user.name,
          companyName: user.company.name
        }));

      result.forEach(user =>
        console.log(`User ID ${user.id}: ${user.name} works at ${user.companyName}`)
      );
    })
    .catch(err => console.error("Error:", err.message));
}

// Successful fetch
fetchUsersAndSummarize();


// Test error handling with a wrong URL
function testError() {
  const wrongUrl = "https://jsonplaceholder.typicode.com/u5ers";

  fetch(wrongUrl)
    .then(res => {
      if (!res.ok) throw new Error(`Network issue: ${res.status}`);
      return res.json();
    })
    .then(data => console.log(data))
    .catch(err => console.error("Caught error:", err.message));
}

// Error test
testError();

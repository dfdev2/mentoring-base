export default function Tasks() {
  const url = "https://jsonplaceholder.typicode.com/users";

  fetch(url)
    .then((response) => response.json())
    .then((users) => {
      const answer1 = users.map((el) => ({ id: el.id, username: el.username }));
      const answer2 = users.reduce((acc, curr) => [...acc, curr.email], []);
      const answer3 = users.find((el) => el.id === 9);
      const answer4 = users.filter((el) => el.address.city === "Lebsackbury");
      const answer5 = users.slice(0, 5);
      const answer6 = users.reverse();
      const answer7 = users.length;
      const answer8 = users.reduce(
        (acc, curr) => (curr.website.includes(".com") ? [...acc, curr] : acc),
        []
      );
      const answer9 = users.reduce(
        (acc, curr) => (curr.username.length > 12 ? [...acc, curr] : acc),
        []
      );
      const answer10 = users.reduce(
        (acc, curr) => [...acc, curr.username.toLocaleLowerCase],
        []
      );

      // Answers ========
      console.log("Answer 1:", answer1);
      console.log("Answer 2:", answer2);
      console.log("Answer 3:", answer3);
      console.log("Answer 4:", answer4);
      console.log("Answer 5:", answer5);
      console.log("Answer 6:", answer6);
      console.log("Answer 7:", answer7);
      console.log("Answer 8:", answer8);
      console.log("Answer 9:", answer9);
      console.log("Answer 10:", answer10);
    })

    .catch((error) => {
      console.error("Error fetching users:", error);
    });
}

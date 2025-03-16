async function getUsersAndPosts() {
    try {
        const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!usersResponse.ok) {
            throw new Error(Помилка при отриманні користувачів: ${usersResponse.status});
        }
        const users = await usersResponse.json();

        // Для кожного користувача отримуємо його пости
        const usersWithPosts = await Promise.all(users.map(async (user) => {
            const postsResponse = await fetch(https://jsonplaceholder.typicode.com/posts?userId=${user.id});
            if (!postsResponse.ok) {
                throw new Error(Помилка при отриманні постів для користувача ${user.id}: ${postsResponse.status});
            }
            const posts = await postsResponse.json();
            return { ...user, posts };
        }));

        console.log(usersWithPosts);
    } catch (error) {
        console.error('Помилка:', error);
    }
}

getUsersAndPosts();
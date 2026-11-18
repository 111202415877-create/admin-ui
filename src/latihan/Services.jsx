  export const users = [
    {
      name: "April",
      email: "april@gmail.com",
      street: "Jl. Indraprasta",
      city: "Semarang",
      age: 25,
      job: "Web Developer",
    },
    {
      name: "Yani",
      email: "yani@gmail.com",
      street: "Jl. Imam Bonjol",
      city: "Ungaran",
    },
    {
      name: "Safitri",
      email: "safitri@gmail.com",
      street: "Jl. Pemuda",
      city: "Kendal",
    },
  ];

  export const newUsers = [
    {
      name: "New April",
      email: "april@gmail.com",
      street: "Jl. Indraprasta",
      city: "Semarang",
      age: 25,
      job: "Web Developer",
    },
    {
      name: "New Yani",
      email: "yani@gmail.com",
      street: "Jl. Imam Bonjol",
      city: "Ungaran",
    },
  ];

  const city ="jakarta";
  const street ="Jl Kebon Jeruk";

  export const getPosts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Gagal mengambil data dari server');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

  
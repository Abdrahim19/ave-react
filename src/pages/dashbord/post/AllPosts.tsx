import UserPost from "./UserPost";
const AllPosts = () => {
  const postsData = [
    {
      id: 1,
      userName: "John Doe",
      postTime: "2024-02-26T12:00:00Z",
      userLocation: "City, Country",
      userImagePost: "https://i.ibb.co/PTrBjrY/Image-40.png",
      postImage: [
        "https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Web-Developer.jpg",
        "https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Web-Developer.jpg",
        "https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Web-Developer.jpg",
        "https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Web-Developer.jpg"
      ],
      postDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      userName: "John Doe",
      postTime: "2024-02-26T12:00:00Z",
      userLocation: "City, Country",
      userImagePost: "https://i.ibb.co/PTrBjrY/Image-40.png",
      postImage: [
        "https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Web-Developer.jpg",
        "https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Web-Developer.jpg",
        "https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Web-Developer.jpg",
        "https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Web-Developer.jpg"
      ],
      postDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 3,
      userName: "John Doe",
      postTime: "2024-02-26T12:00:00Z",
      userLocation: "City, Country",
      userImagePost: "https://i.ibb.co/PTrBjrY/Image-40.png",
      postImage: [
        "https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Web-Developer.jpg",
        "https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Web-Developer.jpg",
        "https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Web-Developer.jpg",
        "https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Web-Developer.jpg"
      ],
      postDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 4,
      userName: "John Doe",
      postTime: "2024-02-26T12:00:00Z",
      userLocation: "City, Country",
      userImagePost: "https://i.ibb.co/PTrBjrY/Image-40.png",
      postImage: [
        "https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Web-Developer.jpg",
        "https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Web-Developer.jpg",
        "https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Web-Developer.jpg",
        "https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Web-Developer.jpg"
      ],
      postDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ];
  return (
    <div>
      {postsData.map((post) => (
        <UserPost key={post.id} {...post} />
      ))}
    </div>
  );
};

export default AllPosts;

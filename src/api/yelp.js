import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer p3T32ip5DGsGDEZOucZ7vfWF-jQ6d37nFetP12irxQRwK7Dlp-uqxRZjSS16q_ttyZw0dwF8kZt7XYFpFWI5JAm16AkaDhEHrc6FModIF21G4wgvmM7izXAVZYuWYXYx",
  },
});

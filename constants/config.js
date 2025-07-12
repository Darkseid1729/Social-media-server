const corsOptions = {
  origin: [
    "https://social-media-adi.vercel.app/",
    process.env.CLIENT_URL,

  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const CHATTU_TOKEN = "my-social-media-token";

export { corsOptions, CHATTU_TOKEN };

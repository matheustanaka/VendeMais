const session = {
  secret: "QLHrBxjNmxeoFiHXQTF8IEaRiAgmRs3J6KEyn8GyUERYkWR2TJ",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24 }, // 1 day
};

module.exports = session;

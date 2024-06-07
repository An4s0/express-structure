
const getUser = async (query) => {
  try {
    const user = 0;
    if (!user || !user.isActive) {
      throw Error('User not found or not active');
    }

    return user;
  } catch (err) {
    throw Error(err);
  }
};

module.exports = { getUser };
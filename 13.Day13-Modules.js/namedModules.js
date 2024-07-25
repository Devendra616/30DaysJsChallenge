// !Activity 2: Named and Default Exports
// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script

const checkLogin = (user) => {
  if (!user) {
    return "User is not available";
  }
  if (user.name && user.email) {
    return "User can be verified";
  }

  return "Invalid inputs";
};

const namedModule1 = () => {
  return "This is from named module 1";
};

export { namedModule1, checkLogin };

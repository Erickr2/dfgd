function random() {
    return Math.random().toString(36).substr();
  }
  
  function token() {
    return random() + random();
  }

  module.exports = {
    token
  }
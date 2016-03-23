exports.Class = function(currentProperty, setProperty) {
  this.currentProperty = currentProperty;
  this.setProperty = setProperty;
};

exports.Class.prototype.triggerAlarm = function(currentProperty, setProperty) {
  if (currentProperty === setProperty) {
    return true;
  }
  else {
    return false;
  }
};

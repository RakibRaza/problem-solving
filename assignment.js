// https://github.com/RakibRaza/problem-solving

// kilometer to meter converter
function kilometerToMeter(kilometer) {
  // check kilometer is valid or not
  if (kilometer < 1 || typeof kilometer != "number") {
    return "accept only positive number.";
  }

  var meter = kilometer * 1000;
  return meter;
}

// buget calculator
function budgetCalculator(watch, mobile, laptop) {
  // check product is valid or not
  if (
    typeof watch != "number" ||
    typeof mobile != "number" ||
    typeof laptop != "number"
  ) {
    return "accept only positive number";
  }
  if (watch < 1 || mobile < 1 || laptop < 1) {
    return "you should buy at least one of each product.";
  }

  // calculate total cost
  var watchPrice = watch * 50;
  var mobilePrice = mobile * 100;
  var laptopPrice = laptop * 500;

  var totalCost = watchPrice + mobilePrice + laptopPrice;
  return totalCost;
}

// hotel cost
function hotelCost(day) {
  // check day is valid or not
  if (typeof day != "number" || day < 1) {
    return "accept only positive number.";
  }

  var totalRent = 0;
  // calculate hotel rent
  if (day <= 10) {
    totalRent = day * 100;
  } else if (day <= 20) {
    var firstHalf = 10 * 100;
    var remainingDay = day - 10;
    var secondHalf = remainingDay * 80;

    totalRent = firstHalf + secondHalf;
  } else {
    var firstHalf = 10 * 100;
    var secondHalf = 10 * 80;
    var remainingDay = day - 20;
    var thirdHalf = remainingDay * 50;

    totalRent = firstHalf + secondHalf + thirdHalf;
  }

  return totalRent;
}

// mega friend
function megaFriend(friends) {
  // check array is valid or not
  if (!Array.isArray(friends)) {
    return "accept only array.";
  }
  if (friends.length === 0) {
    return "input array should have at least one friend.";
  }
  for (var i = 0; i < friends.length; i++) {
    if (typeof friends[i] != "string" || friends[i].length === 0) {
      return "input array should only have name.";
    }
  }

  // longest friend name
  var friend = friends[0];
  for (var i = 0; i < friends.length; i++) {
    if (friend.length < friends[i].length) {
      friend = friends[i];
    }
  }

  return friend;
}

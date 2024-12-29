// Solidity version declaration
pragma solidity 0.8.28;

// contract declaration
contract SumContract {
  // define state variables and make them public
  uint public var1;
  uint public var2;
  uint public sum;

  /* define public function that
     sets the value of the state vars */
  function set(uint x, uint y) public {
    var1 = x;
    var2 = y;
    sum = var1 + var2;
  }

  /* define public function that
     gets the value of the sum */
  function get() public view returns (uint) {
    return sum;
  }
}

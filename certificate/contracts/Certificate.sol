pragma solidity ^0.4.14;

contract Certificate {
    address public issuer;
    string public cert_hash;
    bool public revoked;

    function Certificate() public {
        issuer = msg.sender;
        revoked = false;
    }

    function set_hash(string memory new_hash) public only_issuer {
        cert_hash = new_hash;
    }

    function set_revocation(bool x) public only_issuer {
        revoked = x;
    }

    modifier only_issuer() {
	    require(msg.sender == issuer); //only issuer can call the function
	    _;
    }


    //Validation

    function validate_hash(string memory check_hash) public view returns (bool) {
        if (keccak256(check_hash) == keccak256(cert_hash)) {
            return true;
        } else {
            return false;
        }

    }

    function validate_issuer(address check_issuer) public view returns (bool) {
        if (keccak256(check_issuer) == keccak256(issuer)) {
            return true;
        } else {
            return false;
        }
    }

    function validate_revocation() public view returns (bool) {
        return revoked;
    }
}

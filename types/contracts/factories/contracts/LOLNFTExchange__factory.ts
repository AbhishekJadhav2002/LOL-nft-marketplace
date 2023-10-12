/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  LOLNFTExchange,
  LOLNFTExchangeInterface,
} from "../../contracts/LOLNFTExchange";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lol",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lolToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "ListingCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
    ],
    name: "ListingSold",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "listingId",
        type: "uint256",
      },
    ],
    name: "buyNFT",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "createListing",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "listings",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isSold",
        type: "bool",
      },
      {
        internalType: "address",
        name: "seller",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lol",
    outputs: [
      {
        internalType: "contract IERC721",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lolToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200103738038062001037833981810160405281019062000037919062000278565b82600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620000ad5760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620000a49190620002e5565b60405180910390fd5b620000be816200014a60201b60201c565b5081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505062000302565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620002408262000213565b9050919050565b620002528162000233565b81146200025e57600080fd5b50565b600081519050620002728162000247565b92915050565b6000806000606084860312156200029457620002936200020e565b5b6000620002a48682870162000261565b9350506020620002b78682870162000261565b9250506040620002ca8682870162000261565b9150509250925092565b620002df8162000233565b82525050565b6000602082019050620002fc6000830184620002d4565b92915050565b610d2580620003126000396000f3fe60806040526004361061007b5760003560e01c80638da5cb5b1161004e5780638da5cb5b14610109578063a79123a914610134578063de74e57b1461015d578063f2fde38b1461019e5761007b565b806351ed828814610080578063715018a61461009c57806371e2d919146100b35780638b4b09ea146100de575b600080fd5b61009a600480360381019061009591906108d5565b6101c7565b005b3480156100a857600080fd5b506100b16103f5565b005b3480156100bf57600080fd5b506100c8610409565b6040516100d59190610981565b60405180910390f35b3480156100ea57600080fd5b506100f361042f565b60405161010091906109bd565b60405180910390f35b34801561011557600080fd5b5061011e610455565b60405161012b91906109f9565b60405180910390f35b34801561014057600080fd5b5061015b60048036038101906101569190610a14565b61047e565b005b34801561016957600080fd5b50610184600480360381019061017f91906108d5565b61065e565b604051610195959493929190610a7e565b60405180910390f35b3480156101aa57600080fd5b506101c560048036038101906101c09190610afd565b6106c1565b005b60006004600083815260200190815260200160002090508060030160009054906101000a900460ff1615610230576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161022790610bad565b60405180910390fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd338360030160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684600201546040518463ffffffff1660e01b81526004016102b793929190610bcd565b6020604051808303816000875af11580156102d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102fa9190610c30565b50600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd303384600101546040518463ffffffff1660e01b815260040161035e93929190610bcd565b600060405180830381600087803b15801561037857600080fd5b505af115801561038c573d6000803e3d6000fd5b5050505060018160030160006101000a81548160ff0219169083151502179055503373ffffffffffffffffffffffffffffffffffffffff16827f8f9d273ad6b9ef6936db5cd20a141ecb032af10f2a5fec60c106343670b2c87760405160405180910390a35050565b6103fd610747565b61040760006107ce565b565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b81526004016104dd93929190610bcd565b600060405180830381600087803b1580156104f757600080fd5b505af115801561050b573d6000803e3d6000fd5b505050506003600081548092919061052290610c8c565b9190505550600060035490506040518060a001604052808281526020018481526020018381526020016000151581526020013373ffffffffffffffffffffffffffffffffffffffff168152506004600083815260200190815260200160002060008201518160000155602082015181600101556040820151816002015560608201518160030160006101000a81548160ff02191690831515021790555060808201518160030160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050503373ffffffffffffffffffffffffffffffffffffffff1683827f8093adc67e6531e4dcb9f96fe66947096b91ad10573e8136f8ef1a1cebe2fad6856040516106519190610cd4565b60405180910390a4505050565b60046020528060005260406000206000915090508060000154908060010154908060020154908060030160009054906101000a900460ff16908060030160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905085565b6106c9610747565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361073b5760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161073291906109f9565b60405180910390fd5b610744816107ce565b50565b61074f610892565b73ffffffffffffffffffffffffffffffffffffffff1661076d610455565b73ffffffffffffffffffffffffffffffffffffffff16146107cc57610790610892565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016107c391906109f9565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b600080fd5b6000819050919050565b6108b28161089f565b81146108bd57600080fd5b50565b6000813590506108cf816108a9565b92915050565b6000602082840312156108eb576108ea61089a565b5b60006108f9848285016108c0565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061094761094261093d84610902565b610922565b610902565b9050919050565b60006109598261092c565b9050919050565b600061096b8261094e565b9050919050565b61097b81610960565b82525050565b60006020820190506109966000830184610972565b92915050565b60006109a78261094e565b9050919050565b6109b78161099c565b82525050565b60006020820190506109d260008301846109ae565b92915050565b60006109e382610902565b9050919050565b6109f3816109d8565b82525050565b6000602082019050610a0e60008301846109ea565b92915050565b60008060408385031215610a2b57610a2a61089a565b5b6000610a39858286016108c0565b9250506020610a4a858286016108c0565b9150509250929050565b610a5d8161089f565b82525050565b60008115159050919050565b610a7881610a63565b82525050565b600060a082019050610a936000830188610a54565b610aa06020830187610a54565b610aad6040830186610a54565b610aba6060830185610a6f565b610ac760808301846109ea565b9695505050505050565b610ada816109d8565b8114610ae557600080fd5b50565b600081359050610af781610ad1565b92915050565b600060208284031215610b1357610b1261089a565b5b6000610b2184828501610ae8565b91505092915050565b600082825260208201905092915050565b7f4c4f4c4e465445786368616e67653a204e465420697320616c7265616479207360008201527f6f6c640000000000000000000000000000000000000000000000000000000000602082015250565b6000610b97602383610b2a565b9150610ba282610b3b565b604082019050919050565b60006020820190508181036000830152610bc681610b8a565b9050919050565b6000606082019050610be260008301866109ea565b610bef60208301856109ea565b610bfc6040830184610a54565b949350505050565b610c0d81610a63565b8114610c1857600080fd5b50565b600081519050610c2a81610c04565b92915050565b600060208284031215610c4657610c4561089a565b5b6000610c5484828501610c1b565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610c978261089f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610cc957610cc8610c5d565b5b600182019050919050565b6000602082019050610ce96000830184610a54565b9291505056fea2646970667358221220763d526826da8c681375d0347b7647301917200f7902d4ec61759799f617bc3964736f6c63430008140033";

type LOLNFTExchangeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LOLNFTExchangeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LOLNFTExchange__factory extends ContractFactory {
  constructor(...args: LOLNFTExchangeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    initialOwner: AddressLike,
    _lol: AddressLike,
    _lolToken: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      initialOwner,
      _lol,
      _lolToken,
      overrides || {}
    );
  }
  override deploy(
    initialOwner: AddressLike,
    _lol: AddressLike,
    _lolToken: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      initialOwner,
      _lol,
      _lolToken,
      overrides || {}
    ) as Promise<
      LOLNFTExchange & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): LOLNFTExchange__factory {
    return super.connect(runner) as LOLNFTExchange__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LOLNFTExchangeInterface {
    return new Interface(_abi) as LOLNFTExchangeInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): LOLNFTExchange {
    return new Contract(address, _abi, runner) as unknown as LOLNFTExchange;
  }
}

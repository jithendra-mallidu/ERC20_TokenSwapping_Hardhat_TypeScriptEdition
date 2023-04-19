/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface AtomicSwapERC20Interface extends utils.Interface {
  functions: {
    "check(uint256)": FunctionFragment;
    "close(uint256)": FunctionFragment;
    "expire(uint256)": FunctionFragment;
    "open(uint256,address,uint256,address,uint256,uint256)": FunctionFragment;
    "swapStates(uint256)": FunctionFragment;
    "swaps(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "check"
      | "close"
      | "expire"
      | "open"
      | "swapStates"
      | "swaps"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "check",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "close",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "expire",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "open",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapStates",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "swaps",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "check", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "close", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "expire", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "open", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swapStates", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swaps", data: BytesLike): Result;

  events: {
    "Close(uint256)": EventFragment;
    "Open(uint256,uint256,address,address,uint256,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Close"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Open"): EventFragment;
}

export interface CloseEventObject {
  swapId: BigNumber;
}
export type CloseEvent = TypedEvent<[BigNumber], CloseEventObject>;

export type CloseEventFilter = TypedEventFilter<CloseEvent>;

export interface OpenEventObject {
  _swapID: BigNumber;
  _timelock: BigNumber;
  _erc20ContractAddressDT: string;
  _erc20ContractAddressWDT: string;
  _erc20TokenAmountDT: BigNumber;
  _erc20TokenAmountWDT: BigNumber;
  _whoInitiatedTrade: string;
}
export type OpenEvent = TypedEvent<
  [BigNumber, BigNumber, string, string, BigNumber, BigNumber, string],
  OpenEventObject
>;

export type OpenEventFilter = TypedEventFilter<OpenEvent>;

export interface AtomicSwapERC20 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AtomicSwapERC20Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    check(
      _swapId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, BigNumber, BigNumber, string] & {
        erc20ContractAddressDT: string;
        erc20TokenAmountDT: BigNumber;
        erc20ContractAddressWDT: string;
        erc20TokenAmountWDT: BigNumber;
        timeLock: BigNumber;
        whoInitiatedTrade: string;
      }
    >;

    close(
      _swapId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    expire(
      _swapId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    open(
      _swapId: PromiseOrValue<BigNumberish>,
      _erc20ContractAddressDT: PromiseOrValue<string>,
      _erc20ValueDT: PromiseOrValue<BigNumberish>,
      _erc20ContractAddressWDT: PromiseOrValue<string>,
      _erc20ValueWDT: PromiseOrValue<BigNumberish>,
      _timeLock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapStates(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    swaps(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string,
        BigNumber,
        BigNumber,
        string
      ] & {
        swapId: BigNumber;
        startTime: BigNumber;
        timeLock: BigNumber;
        erc20ContractAddressDT: string;
        erc20ContractAddressWDT: string;
        erc20TokenAmountDT: BigNumber;
        erc20TokenAmountWDT: BigNumber;
        whoInitiatedTrade: string;
      }
    >;
  };

  check(
    _swapId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, string, BigNumber, BigNumber, string] & {
      erc20ContractAddressDT: string;
      erc20TokenAmountDT: BigNumber;
      erc20ContractAddressWDT: string;
      erc20TokenAmountWDT: BigNumber;
      timeLock: BigNumber;
      whoInitiatedTrade: string;
    }
  >;

  close(
    _swapId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  expire(
    _swapId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  open(
    _swapId: PromiseOrValue<BigNumberish>,
    _erc20ContractAddressDT: PromiseOrValue<string>,
    _erc20ValueDT: PromiseOrValue<BigNumberish>,
    _erc20ContractAddressWDT: PromiseOrValue<string>,
    _erc20ValueWDT: PromiseOrValue<BigNumberish>,
    _timeLock: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapStates(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number>;

  swaps(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      string,
      string,
      BigNumber,
      BigNumber,
      string
    ] & {
      swapId: BigNumber;
      startTime: BigNumber;
      timeLock: BigNumber;
      erc20ContractAddressDT: string;
      erc20ContractAddressWDT: string;
      erc20TokenAmountDT: BigNumber;
      erc20TokenAmountWDT: BigNumber;
      whoInitiatedTrade: string;
    }
  >;

  callStatic: {
    check(
      _swapId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, BigNumber, BigNumber, string] & {
        erc20ContractAddressDT: string;
        erc20TokenAmountDT: BigNumber;
        erc20ContractAddressWDT: string;
        erc20TokenAmountWDT: BigNumber;
        timeLock: BigNumber;
        whoInitiatedTrade: string;
      }
    >;

    close(
      _swapId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    expire(
      _swapId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    open(
      _swapId: PromiseOrValue<BigNumberish>,
      _erc20ContractAddressDT: PromiseOrValue<string>,
      _erc20ValueDT: PromiseOrValue<BigNumberish>,
      _erc20ContractAddressWDT: PromiseOrValue<string>,
      _erc20ValueWDT: PromiseOrValue<BigNumberish>,
      _timeLock: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    swapStates(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;

    swaps(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string,
        BigNumber,
        BigNumber,
        string
      ] & {
        swapId: BigNumber;
        startTime: BigNumber;
        timeLock: BigNumber;
        erc20ContractAddressDT: string;
        erc20ContractAddressWDT: string;
        erc20TokenAmountDT: BigNumber;
        erc20TokenAmountWDT: BigNumber;
        whoInitiatedTrade: string;
      }
    >;
  };

  filters: {
    "Close(uint256)"(swapId?: null): CloseEventFilter;
    Close(swapId?: null): CloseEventFilter;

    "Open(uint256,uint256,address,address,uint256,uint256,address)"(
      _swapID?: null,
      _timelock?: null,
      _erc20ContractAddressDT?: null,
      _erc20ContractAddressWDT?: null,
      _erc20TokenAmountDT?: null,
      _erc20TokenAmountWDT?: null,
      _whoInitiatedTrade?: null
    ): OpenEventFilter;
    Open(
      _swapID?: null,
      _timelock?: null,
      _erc20ContractAddressDT?: null,
      _erc20ContractAddressWDT?: null,
      _erc20TokenAmountDT?: null,
      _erc20TokenAmountWDT?: null,
      _whoInitiatedTrade?: null
    ): OpenEventFilter;
  };

  estimateGas: {
    check(
      _swapId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    close(
      _swapId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    expire(
      _swapId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    open(
      _swapId: PromiseOrValue<BigNumberish>,
      _erc20ContractAddressDT: PromiseOrValue<string>,
      _erc20ValueDT: PromiseOrValue<BigNumberish>,
      _erc20ContractAddressWDT: PromiseOrValue<string>,
      _erc20ValueWDT: PromiseOrValue<BigNumberish>,
      _timeLock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapStates(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swaps(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    check(
      _swapId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    close(
      _swapId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    expire(
      _swapId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    open(
      _swapId: PromiseOrValue<BigNumberish>,
      _erc20ContractAddressDT: PromiseOrValue<string>,
      _erc20ValueDT: PromiseOrValue<BigNumberish>,
      _erc20ContractAddressWDT: PromiseOrValue<string>,
      _erc20ValueWDT: PromiseOrValue<BigNumberish>,
      _timeLock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapStates(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swaps(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
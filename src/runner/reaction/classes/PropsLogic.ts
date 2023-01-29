import { Props } from "runner/reaction/classes/props";
import { IHandlerArgs, InputHandlers, OutputJointers, IReaction } from "runner/reaction/interfaces/interfaces";
import { Jointer } from "./jointer";

export const OUTPUT = "output"
export class PropsLogic implements IReaction {
  name: string = "PropsLogic";
  state: any;
  inputs: InputHandlers = {};
  outputs: InputHandlers = {};
  private jointers: OutputJointers = {};

  constructor(private $props: Props, private propName: string) {
    this.inputs['set'] = this.set
    this.inputs['get'] = this.get
    const jointer = new Jointer()
    this.jointers[OUTPUT] = jointer
    this.outputs[OUTPUT] = jointer.flowIn
  }

  set = (args?: IHandlerArgs) => {
    const { inputValue } = args || {}
    this.$props.setValue(this.propName, inputValue)
  }

  get = () => {
    this.outputs[OUTPUT]?.({
      inputValue: this.$props.getValue(this.propName)
    })
  }

  getJointer(name: string) {
    return this.jointers[name]
  }
}
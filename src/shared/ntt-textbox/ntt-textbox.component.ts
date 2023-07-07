import { DxTextBox } from "devextreme-vue/text-box";
import { DxRequiredRule, DxValidator } from "devextreme-vue/validator";
import { Options, Vue } from "vue-class-component";
import { Prop, Ref, Watch } from "vue-property-decorator";

@Options({
  components: {
    DxTextBox,
    DxValidator,
    DxRequiredRule,
  },
})
export default class NttTextBoxComponent extends Vue {
  @Prop() modelValue!: string;
  @Prop() label!: string;
  @Prop() placeholder!: string;
  @Prop() required!: boolean;
  @Prop() requiredMessage!: string;
  @Prop({ default: false }) isDisabledProp?: boolean;
  @Prop({ default: false }) showClearButton?: boolean;
  @Prop({ default: "text" }) mode?: string;
  @Prop({ default: 0 }) reset?: number;
  @Ref("validationRef") validation!: DxValidator;

  get model(): string {
    return this.modelValue;
  }

  set model(value: string) {
    this.$emit("update:modelValue", value);
  }

  valueChanged(e: { value: any }) {
    this.$emit("valueChanged", e.value);
  }

  @Watch("reset")
  public onRequestChanged() {
    if (this.validation) {
      this.validation.instance?.reset();
    }
  }
}

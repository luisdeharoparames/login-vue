import NttButton from "@/shared/ntt-button/ntt-button.component.vue";
import NttTextBox from "@/shared/ntt-textbox/ntt-textbox.component.vue";
// import NttSpinner from "@/shared/components/ntt-spinner/ntt-spinner.component.vue";
import { Options, Vue } from "vue-class-component";


@Options({
  components: { NttButton, NttTextBox },
})
export default class LoginComponent extends Vue {
  timeline!: any;

  innerWidth: number = window.innerWidth;

  mounted() {
    this.addAnimate();
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  }

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize() {
    this.innerWidth = window.innerWidth;
  }

//   login() {
//     authorizationService
//       .login(this.loginDto)
//       .then((loginResponse) => {
//         this.routeTo("/main");
//       })
//       .catch((err) => {
//         messageService.toast(err.message, "warning");
//       });
//   }

  addAnimate() {
    /* ------------ MOVE SVG -------------- */
    // const { bubble, bubblePulse } = this.$refs;

    // this.timeline = new gsap.TimelineLite({
    //   onComplete: () => this.timeline.restart(),
    // });

    // this.timeline.to(bubble, 8, {
    //   opacity: 1,
    //   scale: 0.8,
    //   rotation: 6,
    // //   ease: gsap.Back.easeOut.config(5),
    // });

    // this.timeline.to(
    //   bubblePulse,
    //   1.1,
    //   {
    //     scale: 3,
    //     opacity: 0,
    //     // ease: gsap.Expo.easeOut,
    //   },
    //   "-=1.2"
    // );
    // this.timeline.to(bubble, 8, {
    //   scale: 1.05,
    //   rotation: "+=10",
    // //   ease: gsap.Linear.easeNone,
    // });
  }

//   private routeTo(rut: string) {
//     this.$router.push(rut);
//   }
}

export {};
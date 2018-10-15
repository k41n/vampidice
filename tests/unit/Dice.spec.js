import { shallowMount } from "@vue/test-utils";
import Dice from "@/components/Dice.vue";

describe("Dice.vue", () => {
  it("renders dice rectangle", () => {
    const wrapper = shallowMount(Dice, {});
    expect(wrapper.contains(".dice")).toBe(true);
  });
});

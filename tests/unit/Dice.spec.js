import { shallowMount } from "@vue/test-utils";
import Dice from "@/components/Dice.vue";

describe("Dice.vue", () => {
  it("renders dice image", () => {
    const wrapper = shallowMount(Dice, {});
    expect(wrapper.find(".dice").length).toEqual(1);
  });
});
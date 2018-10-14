import { shallowMount } from "@vue/test-utils";
import RollBank from "@/components/RollBank.vue";

describe("RollBank.vue", () => {
  it("renders set of when passed", () => {
    const wrapper = shallowMount(RollBank, {});
    expect(wrapper.find(".roll-bank").length).toEqual(1);
    expect(wrapper.find("Dice").length).toEqual(10);
  });
});

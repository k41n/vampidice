import { shallowMount } from "@vue/test-utils";
import RollBank from "@/components/RollBank.vue";

describe("RollBank.vue", () => {
  it("renders set of when passed", () => {
    const wrapper = shallowMount(RollBank, {});
    expect(wrapper.contains(".roll-bank")).toBe(true)
  });
});

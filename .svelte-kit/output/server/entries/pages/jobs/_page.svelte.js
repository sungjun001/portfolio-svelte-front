import { c as create_ssr_component, e as escape, d as each, v as validate_component } from "../../../chunks/ssr.js";
const css = {
  code: ".job-item.svelte-ekjpr2{border:1px solid grey;padding:2rem;width:50%;margin:1rem;border-radius:10px}.job-details.svelte-ekjpr2{display:flex;justify-content:space-between}",
  map: null
};
const JobDisplay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { job } = $$props;
  if ($$props.job === void 0 && $$bindings.job && job !== void 0)
    $$bindings.job(job);
  $$result.css.add(css);
  return `<div class="job-item svelte-ekjpr2"><p>Job Title: <b>${escape(job.job_title)}</b></p> <p>Description: <b>${escape(job.job_description)}</b></p> <div class="job-details svelte-ekjpr2"><span>Company Name : <b>${escape(job.company_name)}</b></span> <span>Compensation per year: <b>${escape(job.compensation_per_year)}</b></span></div> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1vphpzz_START -->${$$result.title = `<title>Jobs</title>`, ""}<meta name="description" content="Job Listing Home page"><style data-svelte-h="svelte-15xqz3z">.home-page {
			padding: 2rem 4rem;
			display: flex;
			align-items: center;
			flex-direction: column;
			justify-content: center;
		}</style><!-- HEAD_svelte-1vphpzz_END -->`, ""} <div class="home-page"><h1 data-svelte-h="svelte-14gznbt">Job Listing Home page</h1> ${each(data.job_list, (job) => {
    return `${validate_component(JobDisplay, "JobDisplay").$$render($$result, { job }, {}, {})}`;
  })}</div>`;
});
export {
  Page as default
};

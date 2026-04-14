
type BannerComponent = {
  world: 'os' | 'wc';
};

export const Banner = ({ world }: BannerComponent ) => {
  return <div className={`rlt-banner -${world}`}></div>;
};
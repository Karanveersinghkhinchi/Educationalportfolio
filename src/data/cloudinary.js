// ═══════════════════════════════════════════
// CLOUDINARY CONFIG
// ═══════════════════════════════════════════
export const CLOUD_NAME = 'uereox6s';

// Generate Cloudinary player embed URL
export const cldEmbed = (publicId, opts = {}) => {
  const params = new URLSearchParams({
    cloud_name: CLOUD_NAME,
    public_id: publicId,
    'player[autoplay]': opts.autoplay ? 'true' : 'false',
    'player[muted]': 'true',
    'player[loop]': opts.loop ? 'true' : 'false',
    'player[controls]': opts.controls !== false ? 'true' : 'false',
    'player[fluid]': 'true',
  });
  return `https://player.cloudinary.com/embed/?${params.toString()}`;
};

// Generate video poster image from Cloudinary
export const cldPoster = (publicId, width = 800) =>
  `https://res.cloudinary.com/uereox6s/video/upload/so_1,w_${width},q_auto,f_jpg/${publicId}.jpg`;

// Generate thumbnail at a specific second
export const cldThumb = (publicId, second = 1, width = 800) =>
  `https://res.cloudinary.com/uereox6s/video/upload/so_${second},w_${width},q_auto,f_jpg/${publicId}.jpg`;

// ═══════════════════════════════════════════
// REAL VIDEO PORTFOLIO
// ═══════════════════════════════════════════

// Hero / Signature piece
export const HERO_VIDEO = {
  id: 'Sss_Final',
  title: 'A Day at a K–12 Institution',
  embed: cldEmbed('Sss_Final', { autoplay: true, loop: true, controls: false }),
  poster: cldPoster('Sss_Final', 1600),
};

// Campus Films (7 films)
export const CAMPUS_FILMS = [
  { id: 'smart_001', label: 'CAMPUS FILM', title: 'Campus Identity Film',      institution: 'K–12 Institution · Rajasthan',      aspect: '16:9', poster: cldPoster('smart_001') },
  { id: 'final_11',  label: 'CAMPUS FILM', title: 'Institutional Brand Story', institution: 'CBSE School · Western India',         aspect: '16:9', poster: cldPoster('final_11') },
  { id: 'final_08',  label: 'BRAND FILM',  title: 'Campus Discovery Film',     institution: 'K–12 School · North India',           aspect: '16:9', poster: cldPoster('final_08') },
  { id: 'final_04',  label: 'CAMPUS FILM', title: 'Culture & Community',       institution: 'Residential School · Central India',  aspect: '9:16', poster: cldPoster('final_04') },
  { id: 'final_09',  label: 'REEL',        title: 'Student Life Stories',      institution: 'CBSE Institution · Rajasthan',        aspect: '9:16', poster: cldPoster('final_09') },
  { id: 'final_06',  label: 'CAMPUS FILM', title: 'Academic Excellence Film',  institution: 'K–12 School · Rajasthan',             aspect: '16:9', poster: cldPoster('final_06') },
  { id: 'final_05',  label: 'REEL',        title: 'Campus Moments Series',     institution: 'Premium School · India',              aspect: '9:16', poster: cldPoster('final_05') },
];

// Sports Films (3 films)
export const SPORTS_FILMS = [
  { id: 'smart_002', label: 'SPORTS FILM', title: 'Sports Day Highlights',     institution: 'K–12 Institution · Rajasthan',  aspect: '16:9', poster: cldPoster('smart_002') },
  { id: 'final_10',  label: 'SPORTS FILM', title: 'Athletic Championships',    institution: 'CBSE School · North India',     aspect: '16:9', poster: cldPoster('final_10') },
  { id: 'ss_016',    label: 'SPORTS REEL', title: 'Campus Sports Stories',     institution: 'K–12 School · India',           aspect: '9:16', poster: cldPoster('ss_016') },
];

// Social / Emotional
export const SOCIAL_FILMS = [
  { id: 'ss_014', label: 'SOCIAL REEL', title: 'Human Moments on Campus', institution: 'K–12 Institution · India', aspect: '9:16', poster: cldPoster('ss_014') },
];

// Leadership
export const LEADERSHIP_FILMS = [
  { id: 'Sequence_01', label: 'LEADERSHIP FILM', title: 'Leadership & Vision', institution: 'Educational Institution · India', aspect: '16:9', poster: cldPoster('Sequence_01') },
];

// Events / Institutional
export const EVENT_FILMS = [
  { id: '430', label: 'EVENT FILM', title: 'Republic Day — Institutional Film', institution: 'K–12 School · Rajasthan', aspect: '16:9', poster: cldPoster('430') },
];

// Featured (Signature case study)
export const FEATURED_FILM = {
  id: 'Sss_Final',
  label: 'SIGNATURE WORK',
  title: 'A Day at a K–12 Institution',
  institution: 'Residential K–12 School · Rajasthan',
  aspect: '16:9',
  poster: cldPoster('Sss_Final', 1200),
  desc: 'A cinematic day-in-the-life institutional film. From morning assembly to sports fields to classrooms — a complete portrait of campus life.',
  challenge: 'A well-established institution with genuine campus strengths, but no content that made parents feel what it was like to actually be there.',
  approach: 'Go inside. Film real moments. Let students and teachers be themselves.',
  deliverables: ['Cinematic institutional film', 'Student story reels', 'Campus photography', 'Social content library'],
};

// All portfolio combined (for filter grid)
export const ALL_PORTFOLIO = [
  ...CAMPUS_FILMS,
  ...SPORTS_FILMS,
  ...SOCIAL_FILMS,
  ...LEADERSHIP_FILMS,
  ...EVENT_FILMS,
];

// Reel Wall (9 select pieces for home page wall)
export const REEL_WALL = [
  CAMPUS_FILMS[0],  // 16:9
  CAMPUS_FILMS[3],  // 9:16
  SPORTS_FILMS[0],  // 16:9
  CAMPUS_FILMS[1],  // 16:9
  SOCIAL_FILMS[0],  // 9:16
  SPORTS_FILMS[1],  // 16:9
  CAMPUS_FILMS[4],  // 9:16
  LEADERSHIP_FILMS[0], // 16:9
  EVENT_FILMS[0],   // 16:9
];

export const FILTER_CATEGORIES = [
  { key: 'all',       label: 'All Work' },
  { key: 'campus',    label: 'Campus Films' },
  { key: 'sports',    label: 'Sports' },
  { key: 'social',    label: 'Social & Reels' },
  { key: 'leadership',label: 'Leadership' },
  { key: 'events',    label: 'Events' },
];

export const PORTFOLIO_BY_CATEGORY = {
  all:        ALL_PORTFOLIO,
  campus:     CAMPUS_FILMS,
  sports:     SPORTS_FILMS,
  social:     SOCIAL_FILMS,
  leadership: LEADERSHIP_FILMS,
  events:     EVENT_FILMS,
};

export const WHATSAPP_NUMBER = '919876543210';

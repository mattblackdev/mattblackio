import { sectionData } from './section-data';
import { BIO, getGlobalData } from './global-data';

// Builds a single plain-text representation of the résumé from the existing
// structured data. This is imported only by the server-side API route so the
// full text is never shipped to the browser.
export function getResumeContext() {
  const { name, jobTitle, email, linkedIn } = getGlobalData();

  const lines = [];

  lines.push(`Name: ${name}`);
  lines.push(`Title: ${jobTitle}`);
  lines.push(`Email: ${email}`);
  lines.push(`LinkedIn: ${linkedIn}`);
  lines.push('');
  lines.push('Bio:');
  lines.push(BIO);
  lines.push('');

  Object.values(sectionData).forEach((section) => {
    lines.push(`## ${section.title}`);

    (section.subsections || []).forEach((subsection) => {
      const header = [subsection.title, subsection.company, subsection.location, subsection.period]
        .filter(Boolean)
        .join(' | ');
      lines.push(`- ${header}`);

      if (subsection.description) {
        lines.push(`  ${subsection.description}`);
      } else if (subsection.summary) {
        lines.push(`  ${subsection.summary}`);
      }

      if (subsection.link) {
        lines.push(`  Link: ${subsection.link}`);
      }

      (subsection.subSubsections || []).forEach((subSub) => {
        lines.push(`  * ${subSub.title}`);
        (subSub.bullets || []).forEach((bullet) => {
          lines.push(`    - ${bullet}`);
        });
      });
    });

    lines.push('');
  });

  return lines.join('\n').trim();
}

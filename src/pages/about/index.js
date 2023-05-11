import { Grid, Button, Chip, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import PageDescription from '@/components/PageDescription';

export default function AboutPage({ skills }) {
  const router = useRouter();

  return (
    <section>
      <PageDescription title='About Me' description='A brief introduction' />

      <Grid container spacing={2}>
        <Grid item md={6}>
          <h2>WHOIS</h2>
          <p>
            I&apos;m a full stack developer, passionate about technology,
            travel, and food! Check out some of my latest work in the Projects
            section.
          </p>
          <p>
            When not coding, I like to be outside hiking or birdwatching. My
            indoors interests include gaming and trying out new dinner recipes.
            I also enjoy connecting with others across the Dev Community.
          </p>
          <Button
            variant='contained'
            size='large'
            onClick={() => router.push('/contact')}
          >
            Contact Me
          </Button>
        </Grid>
        <Grid item md={6}>
          <h2>SKILLS</h2>
          <Stack direction='row' spacing={2} useFlexGap flexWrap='wrap'>
            {skills.map((skill) => (
              <Chip key={skill} label={skill} />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </section>
  );
}

export async function getStaticProps() {
  let skills = [];

  try {
    const response = await fetch(
      'https://my-skills-api-9037d-default-rtdb.firebaseio.com/skills.json'
    );
    const data = await response.json();
    skills = data.split(',');
  } catch (error) {
    console.error('Error! ☹️ ', error);
  }

  return {
    props: {
      skills,
    },
    revalidate: 86400, // seconds in 1 day
  };
}

// Placeholder before Skills API was added:
// export async function getStaticProps() {
//   return {
//     props: {
//       skills: [
//         'JavaScript',
//         'Typescript',
//         'React',
//         'Node',
//         'Express',
//         'MongoDB',
//       ],
//     },
//   };
// }

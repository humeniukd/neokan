import React from 'react';
import Link from '../components/Link';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Time from '../components/Time';

const useStyles = makeStyles((theme) =>
  createStyles({
    li: {
      padding: theme.spacing(1),
      margin: theme.spacing(1),
      transition: '0.3s',
      '&:hover': {
        backgroundColor: theme.palette.grey['100'],
        borderRadius: theme.spacing(1),
        transition: '0.3s',
      },
    },
    header: {
      padding: 0,
      fontSize: theme.typography.button.fontSize,
      lineHeight: theme.typography.button.lineHeight
    },
    time: {
      fontSize: '1rem',
      fontWeight: 'bold',
      color: theme.palette.blue,
      width: '100%',
      display: 'block',
      lineHeight: '1.2'
    },
    p: {
      fontSize: '1.2rem',
      margin: 0,
      padding: 0,
      lineHeight: 1.4333333333333333
    }
  }),
);

const PostListItem = ({ post }) => {
  const { li, header, time, p } = useStyles()
  return (
    <li className={li} key={post.fields.slug}>
      <Link to={post.fields.slug}>
        <header className={header}>
          <Time
            className={time}
            pubdate
            langKey={post.fields.langKey}
            date={post.frontmatter.date}
          />
          {post.frontmatter.title}
        </header>
        <p className={p}>{post.excerpt}</p>
      </Link>
    </li>
  );
};

export default PostListItem;

import Link from "next/link";
import Image, { ImageProps } from "next/image";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import React from "react";

function Table({ data }: { data: { headers: string[]; rows: string[][] } }) {
  const headers = data.headers.map((header, index: number) => (
    <th key={index}>{header}</th>
  ));
  const rows = data.rows.map((row, index: number) => (
    <tr key={index}>
      {row.map((cell, cellIndex: number) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props: { href: string; children: React.ReactNode }) {
  const { href, children } = props;

  if (href.startsWith("/")) {
    return (
      <Link {...props} href={href}>
        {children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props: ImageProps & { slug?: string }) {
  let src = props.src;

  // 相対パスの場合、投稿フォルダ内の画像として処理
  if (typeof src === "string" && src.startsWith("./") && props.slug) {
    src = `/posts/${props.slug}/${src.replace("./", "")}`;
  }

  return <Image className="rounded-lg" {...props} src={src} alt={props.alt} />;
}

function Code({ children, ...props }: { children: string }) {
  const codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function slugify(str?: string) {
  return str
    ?.toLowerCase()
    ?.trim() // Remove whitespace from both ends of a string
    ?.replace(/\s+/g, "-") // Replace spaces with -
    ?.replace(/&/g, "-and-") // Replace & with 'and'
    ?.replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    ?.replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level: number, className: string) {
  const Heading = ({ children }: { children: string }) => {
    const slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug, className },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

const components = {
  h1: createHeading(1, "text-4xl font-semibold tracking-tighter"),
  h2: createHeading(2, "text-3xl font-semibold tracking-tighter"),
  h3: createHeading(3, "text-2xl font-semibold tracking-tighter"),
  h4: createHeading(4, "text-xl font-semibold tracking-tighter"),
  h5: createHeading(5, "text-lg font-semibold tracking-tighter"),
  h6: createHeading(6, "text-base font-semibold tracking-tighter"),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
};

export function CustomMDX(props: MDXRemoteProps & { slug?: string }) {
  const { slug, ...mdxProps } = props;

  // slugを各コンポーネントに渡すためのラッパー関数
  const componentsWithSlug = {
    ...components,
    img: (imgProps: ImageProps) => <RoundedImage {...imgProps} slug={slug} />,
    Image: (imgProps: ImageProps) => <RoundedImage {...imgProps} slug={slug} />,
  };

  return (
    <MDXRemote
      {...mdxProps}
      components={{ ...componentsWithSlug, ...(mdxProps.components || {}) }}
    />
  );
}

import { ReactElement } from 'react';
import { JsxElement } from 'typescript';

interface HeaderProps {
  title: string,
  topBar?: JsxElement | ReactElement,
}

export default function Header({
  title,
  topBar,
}: HeaderProps) {
  return (
    <div className="px-4 py-8 bg-slate-200 text-indigo-500">
      {topBar}
      <h1 className="font-normal px-3">
        {title}
      </h1>
    </div>
  )
}
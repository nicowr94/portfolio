'use client';

import { useState } from 'react';
import { isExampleFolder, socialNetworkExample, type ExampleFile, type ExampleFolder } from '../../data/socialNetworkExample';

export function useSocialNetworkProjectExplorer() {
  const [selectedPath, setSelectedPath] = useState('red-social/server/posts.js');

  function findFile(folder: ExampleFolder, path: string, parentPath = ''): ExampleFile | null {
    const currentPath = parentPath ? `${parentPath}/${folder.name}` : folder.name;

    for (const child of folder.children) {
      if (isExampleFolder(child)) {
        const found = findFile(child, path, currentPath);
        if (found) return found;
      } else if (`${currentPath}/${child.name}` === path) {
        return child;
      }
    }

    return null;
  }

  const selectedFile = findFile(socialNetworkExample, selectedPath);

  return {
    selectedFile,
    selectedPath,
    setSelectedPath,
    tree: socialNetworkExample,
  };
}

import { vi, test, expect, describe, afterEach } from "vitest"
import { renderHook, waitFor } from '@testing-library/react'
import { Providers } from "../utils/TestUtils";
import useImages from './useImages';
import { Image } from "@/model/Image";

const mockFetch = (data: Image[]) => {
  vi.stubGlobal('fetch', () => Promise.resolve({ json: () => Promise.resolve(data) }));
}
const data: Image[] = [
  { albumId: 1, id: 1, title: "foo", url: "url", thumbnailUrl: "thumbnailUrl" },
  { albumId: 1, id: 2, title: "bar", url: "url", thumbnailUrl: "thumbnailUrl" },
  { albumId: 1, id: 3, title: "baz", url: "url", thumbnailUrl: "thumbnailUrl" },
  { albumId: 1, id: 4, title: "foobar", url: "url", thumbnailUrl: "thumbnailUrl" },
];

describe('useImages hook', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  });

  test('should return all images', async () => {
    mockFetch(data);

    const { result } = renderHook(
      () => useImages(""),
      { wrapper: Providers }
    );

    expect(result.current.isLoading).toBeTruthy();
    await waitFor(() => expect(result.current.data).toHaveLength(4));
  });

  test('should filter images', async () => {
    mockFetch(data);

    const { result } = renderHook(
      () => useImages("fo"),
      { wrapper: Providers }
    );

    await waitFor(() => expect(result.current.data).toHaveLength(2));
  });
});


import path from "node:path";
import { rootPkgJSON } from "root-pkg-json";
import { readJSON } from "read-json-safe";
import { JSONValue, JSONObject, isJSONArray, isJSONObject, isString } from "types-json";

export type MonorepoInfo = {
  directory: string;
  packageJSONPath: string;
  packageJSON: JSONObject;
  workspaces: string[];
};

function isStringArray(value: JSONValue): value is string[] {
  if(isJSONArray(value)) {
    return value.every((item) => isString(item));
  }
  return false;
}

function getWorkspacesFromJSON(pkgJSON: JSONValue | undefined): string[] | undefined {
  if(pkgJSON && isJSONObject(pkgJSON) && "workspaces" in pkgJSON && pkgJSON.workspaces) {
    if(isStringArray(pkgJSON.workspaces)) {
      return pkgJSON.workspaces;
    } else if(isJSONObject(pkgJSON.workspaces) && "packages" in pkgJSON.workspaces && pkgJSON.workspaces.packages && isStringArray(pkgJSON.workspaces.packages)) {
      return pkgJSON.workspaces.packages;
    }
  }
  return undefined;
}

export async function getMonorepoInfo() {
  const pkgJSONPath = await rootPkgJSON();
  if(pkgJSONPath) {
    const pkgJSON = await readJSON(pkgJSONPath);
    const workspaces = getWorkspacesFromJSON(pkgJSON);
    if(workspaces) {
      return {
        directory: path.dirname(pkgJSONPath),
        packageJSONPath: pkgJSONPath,
        packageJSON: pkgJSON as JSONObject,
        workspaces
      };
    }
  }
  return undefined;
}

export async function getWorkspaces() {
  const info = await getMonorepoInfo();
  return info?.workspaces;
}

export async function getMonorepoDir() {
  const info = await getMonorepoInfo();
  return info?.directory;
}

export async function getMonorepoPackageJSONPath() {
  const info = await getMonorepoInfo();
  return info?.packageJSONPath;
}

export async function getMonorepoPackageJSON() {
  const info = await getMonorepoInfo();
  return info?.packageJSON;
}

export async function isMonorepo() {
  const workspaces = await getWorkspaces();
  return workspaces !== undefined;
}

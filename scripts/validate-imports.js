#!/usr/bin/env node
// scripts/validate-imports.js

import { spawn } from "child_process";
import { readFileSync } from "fs";
import { join } from "path";

const COLORS = {
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  reset: "\x1b[0m",
  bold: "\x1b[1m",
};

function log(color, message) {
  console.log(`${color}${message}${COLORS.reset}`);
}

async function validatePackageVersions() {
  log(COLORS.blue, "\n🔍 Validating Package Versions...");

  try {
    const packageJson = JSON.parse(readFileSync("package.json", "utf8"));
    const deps = packageJson.dependencies;

    log(COLORS.green, "✅ Package versions:");
    log(
      COLORS.reset,
      `   @serendipetey/components: ${deps["@serendipetey/components"]}`
    );
    log(
      COLORS.reset,
      `   @serendipetey/design-tokens: ${deps["@serendipetey/design-tokens"]}`
    );

    return true;
  } catch (error) {
    log(COLORS.red, `❌ Error reading package.json: ${error.message}`);
    return false;
  }
}

async function validateTypeScript() {
  log(COLORS.blue, "\n🔍 Validating TypeScript...");

  return new Promise((resolve) => {
    const tsc = spawn("pnpm", ["run", "validate:types"], {
      stdio: "pipe",
      shell: true,
    });

    let output = "";
    tsc.stdout.on("data", (data) => (output += data.toString()));
    tsc.stderr.on("data", (data) => (output += data.toString()));

    tsc.on("close", (code) => {
      if (code === 0) {
        log(COLORS.green, "✅ TypeScript validation passed");
        resolve(true);
      } else {
        log(COLORS.red, "❌ TypeScript validation failed");
        log(COLORS.reset, output);
        resolve(false);
      }
    });
  });
}

async function validateBuild() {
  log(COLORS.blue, "\n🔍 Validating Build...");

  return new Promise((resolve) => {
    const build = spawn("pnpm", ["run", "build"], {
      stdio: "pipe",
      shell: true,
    });

    let output = "";
    build.stdout.on("data", (data) => (output += data.toString()));
    build.stderr.on("data", (data) => (output += data.toString()));

    build.on("close", (code) => {
      if (code === 0) {
        log(COLORS.green, "✅ Build validation passed");
        resolve(true);
      } else {
        log(COLORS.red, "❌ Build validation failed");
        log(COLORS.reset, output);
        resolve(false);
      }
    });
  });
}

async function runValidation() {
  log(COLORS.bold + COLORS.blue, "🚀 Design System Import Validation\n");

  const results = await Promise.all([
    validatePackageVersions(),
    validateTypeScript(),
    validateBuild(),
  ]);

  const passed = results.filter(Boolean).length;
  const total = results.length;

  log(COLORS.blue, "\n📊 Validation Summary:");
  log(COLORS.reset, `   Passed: ${passed}/${total}`);

  if (passed === total) {
    log(
      COLORS.green + COLORS.bold,
      "\n🎉 All validations passed! Published packages are working correctly."
    );
    process.exit(0);
  } else {
    log(
      COLORS.red + COLORS.bold,
      "\n❌ Some validations failed. Check the output above for details."
    );
    process.exit(1);
  }
}

runValidation().catch((error) => {
  log(COLORS.red, `❌ Validation script failed: ${error.message}`);
  process.exit(1);
});

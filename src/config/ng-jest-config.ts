import { formatDiagnostics, ParsedConfiguration, readConfiguration } from '@angular/compiler-cli';
import type { Config } from '@jest/types';
import { ConfigSet } from 'ts-jest/dist/config/config-set';
import type { CompilerOptions } from 'typescript';

export class NgJestConfig extends ConfigSet {
  /**
   * Override `ts-jest` property
   */
  parsedTsConfig!: ParsedConfiguration;

  constructor(public readonly jestCfg: Config.ProjectConfig) {
    super(jestCfg);
  }

  /**
   * Override `ts-jest` behavior because we use `readConfiguration` which will read and resolve tsconfig.
   */
  protected _resolveTsConfig(compilerOptions?: CompilerOptions, resolvedConfigFile?: string): ParsedConfiguration {
    this.logger.debug(
      '_resolveTsConfig: read and resolve config from tsconfig using @angular/compiler-cli readConfiguration',
    );

    let result: ParsedConfiguration;
    if (resolvedConfigFile) {
      result = readConfiguration(resolvedConfigFile);
    } else {
      result = readConfiguration(this.cwd);
      if (compilerOptions) {
        result = {
          ...result,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          options: {
            ...result.options,
            ...compilerOptions,
          } as Record<string, any>, // eslint-disable-line @typescript-eslint/no-explicit-any
        };
      }
    }
    if (result.errors?.length) {
      throw new Error(formatDiagnostics(result.errors));
    }

    return {
      ...result,
      options: {
        ...result.options,
        ...this._overriddenCompilerOptions,
        // Overwrite outDir so we can find generated files next to their .ts origin in compilerHost.
        outDir: '',
        suppressOutputPathCheck: true,
        // For performance, disable AOT decorator downleveling transformer for applications in the CLI.
        // The transformer is not needed for VE or Ivy in this plugin since Angular decorators are removed.
        // While the transformer would make no changes, it would still need to walk each source file AST.
        annotationsAs: 'decorators' as const,
        module: this.compilerModule.ModuleKind.CommonJS,
        target: this.compilerModule.ScriptTarget.ES5,
      },
    };
  }
}
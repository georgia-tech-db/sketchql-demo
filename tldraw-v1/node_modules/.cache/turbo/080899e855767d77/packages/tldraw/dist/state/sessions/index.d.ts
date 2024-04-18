import { ExceptFirst, SessionType } from '~types';
import { ArrowSession } from '../../../src/state/sessions/ArrowSession';
import { BrushSession } from '../../../src/state/sessions/BrushSession';
import { DrawSession } from '../../../src/state/sessions/DrawSession';
import { EditSession } from '../../../src/state/sessions/EditSession';
import { EraseSession } from '../../../src/state/sessions/EraseSession';
import { GridSession } from '../../../src/state/sessions/GridSession';
import { HandleSession } from '../../../src/state/sessions/HandleSession';
import { RotateSession } from '../../../src/state/sessions/RotateSession';
import { TransformSession } from '../../../src/state/sessions/TransformSession';
import { TransformSingleSession } from '../../../src/state/sessions/TransformSingleSession';
import { TranslateSession } from '../../../src/state/sessions/TranslateSession';
export declare type TldrawSession = ArrowSession | BrushSession | DrawSession | HandleSession | RotateSession | TransformSession | TransformSingleSession | TranslateSession | EraseSession | GridSession | EditSession;
export interface SessionsMap {
    [SessionType.Arrow]: typeof ArrowSession;
    [SessionType.Brush]: typeof BrushSession;
    [SessionType.Draw]: typeof DrawSession;
    [SessionType.Erase]: typeof EraseSession;
    [SessionType.Handle]: typeof HandleSession;
    [SessionType.Rotate]: typeof RotateSession;
    [SessionType.Transform]: typeof TransformSession;
    [SessionType.TransformSingle]: typeof TransformSingleSession;
    [SessionType.Translate]: typeof TranslateSession;
    [SessionType.Grid]: typeof GridSession;
    [SessionType.Edit]: typeof EditSession;
}
export declare type SessionOfType<K extends SessionType> = SessionsMap[K];
export declare type SessionArgsOfType<K extends SessionType> = ExceptFirst<ConstructorParameters<SessionOfType<K>>>;
export declare const sessions: {
    [K in SessionType]: SessionsMap[K];
};
export declare const getSession: <K extends SessionType>(type: K) => SessionOfType<K>;
//# sourceMappingURL=index.d.ts.map